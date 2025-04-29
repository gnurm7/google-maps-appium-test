class MapsPage {
    get skipButton() {
        return $('android=new UiSelector().textContains("Skip")');
    }

    get searchBox() {
        return $('android=new UiSelector().resourceId("com.google.android.apps.maps:id/search_omnibox_text_box")');
    }

    get inputBox() {
        return $('android=new UiSelector().resourceId("com.google.android.apps.maps:id/search_omnibox_edit_text")');
    }

    get firstResult() {
        return $('android=new UiSelector().className("android.widget.TextView")');
    }

    get directionsButton() {
        return $('android=new UiSelector().textContains("Yol tarifi")');
    }


    get myLocationOption() {
        return $('android=new UiSelector().text("Konumunuz")');
    }

    get startButton() {
        return $('android=new UiSelector().textContains("Başla")');
    }
}

module.exports = new MapsPage();
