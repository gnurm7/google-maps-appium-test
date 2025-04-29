const MapsPage = require('../pageobjects/maps.page');

describe('Google Maps Navigasyon Testi', () => {
    it('Navigasyon başlatılabiliyor mu?', async () => {
        try {
            if (await MapsPage.skipButton.isDisplayed()) {
                await MapsPage.skipButton.click();
            }
        } catch (e) {
            console.log("Skip görünmedi.");
        }

        await MapsPage.searchBox.waitForExist({ timeout: 10000 });
        await MapsPage.searchBox.click();

        await MapsPage.inputBox.setValue("Belgrad Forest, İstanbul");
        await browser.pause(3000);
        await MapsPage.firstResult.click();

        await MapsPage.directionsButton.waitForExist({ timeout: 5000 });
        await MapsPage.directionsButton.click();


        await MapsPage.myLocationOption.waitForExist({ timeout: 5000 });
        await MapsPage.myLocationOption.click();

        await MapsPage.startButton.waitForExist({ timeout: 5000 });
        await expect(MapsPage.startButton).toBeDisplayed();
    });
});
