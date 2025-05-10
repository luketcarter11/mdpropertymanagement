import requests
from bs4 import BeautifulSoup
import pandas as pd
from datetime import datetime

def scrape_bark_reviews(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to retrieve page. Status code: {response.status_code}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    reviews = []

    # Locate all reviews
    review_elements = soup.find_all('div', class_='single-review')

    for review in review_elements:
        try:
            # Extract author name
            author = review.find('p', itemprop='author').get_text(strip=True)

            # Extract date of review
            date = review.find('meta', itemprop='datePublished')['content']
            date = datetime.strptime(date, '%Y-%m-%d').strftime('%d %B %Y')

            # Extract review text
            text = review.find('p', itemprop='description').get_text(strip=True)

            # Extract star rating (number of yellow stars)
            stars = len(review.find_all('span', class_='star star-5'))

            reviews.append({'Author': author, 'Date': date, 'Rating': stars, 'Review': text})
        except Exception as e:
            print(f"Error extracting review: {e}")

    # Save reviews to a CSV file
    df = pd.DataFrame(reviews)
    df.to_csv('bark_reviews.csv', index=False)
    print("Reviews saved to bark_reviews.csv")

# URL to scrape
url = "https://www.bark.com/en/gb/company/md-property-management/ZKP96/?show_reviews=true"
scrape_bark_reviews(url)
