import {Selector} from 'testcafe';
import config from './config.json';

export async function closingIframe(t) {
   
    await t
        // Switching to iframe and closing it
        .switchToIframe(Selector(config.iframe))
        .click(config.iframeId)
        .switchToMainWindow();
}

export async function searchItem(t, searchString, searchResultString) {
    
    await t
        // Inserting search text in the search bar
        .typeText(config.searchBarId, searchString)
    
        // Start searching
        .pressKey('enter')
    
        // Checking the search result
        .expect(Selector(config.searchResult).innerText).contains(searchResultString);
}

export async function sortSearchResults(t) {

    await t
        .click(Selector(config.descButton)) // Sorting the search results from the highest price to the lowest.
        .expect(Selector(config.sortSelection));
}

export async function checkSorting(t) {
    
    await t
        const itemPrice = Selector(config.itemPriceLocator)
        const itemCount = await itemPrice.count
        const priceArray = new Array(itemCount);
        
        // Adding item price values in the array
        for (var i = 0; i < itemCount; i++) {
            await t
            priceArray.push((Selector(config.itemPriceLocator).nth(i)));
        }
    
        // Checking whether the item prices are sorted
        for (var i = 0; i < itemCount - 1; i++) {
            await t
                .expect(priceArray[i] >= priceArray[i+1]);
        }
}