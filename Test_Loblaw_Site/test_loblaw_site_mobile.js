import {Selector} from 'testcafe';
import config from './config.json';
import {closingIframe, searchItem, sortSearchResults, checkSorting} from './utilities.js';

fixture('Loblaw website in mobile screen')
    .page(config.baseUrl);

test('Search for items and sort the search results', async t => {
    
    await t
        // Calling library fuction to set browser window size to iPhone 5S
        .resizeWindowToFitDevice('iPhone 5S', {
            portraitOrientation: true
        });
    
    await closingIframe(t); // Calling function from 'utilities.js' to close the iFrame
    
    // Calling function from 'utilities.js' to search item in the search bar
    // Providing the parameters 'searchString' and 'searchResultString' expected by the function
    await searchItem(t, 'apples', 'APPLES');
    
    await sortSearchResults(t); // Calling function from 'utilities.js' to sort the search results
    
    await checkSorting(t); // Calling function from 'utilities.js' to check if sorting is cottect
    
});