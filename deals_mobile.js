import {Selector} from 'testcafe';
import config from './super_store_config.json';
import {selectLocation, closingIframe, search, checkDealBadge} from './super_store_utilities.js';

fixture('Real Canadian Superstore website in mobile screen')
    .page(config.baseUrl);

test('Search for item and check deal badge', async t => {
    
    await t
        // Setting browser window size to iPhone 5S
        .resizeWindowToFitDevice('iPhone 5S', {
            portraitOrientation: true
        });
    
    await selectLocation(t); // Called function to select location
    
    await closingIframe(t); // Called function to close the iFrame
    
    await search(t); // Called function to search item
    
    await checkDealBadge(t); // Called function to check deal badge
    
});