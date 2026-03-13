// logic.js
export const googleSheetAPI = {
    url: "https://script.google.com/macros/s/AKfycbywdd8Me5wQaduias_AOw-WnjwgmFggL7AzF_NMJlOU5mr3mD0G85X2j63Pg4gNRbuE/exec", // あなたのGASのURL

    async fetchViews() {
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            return data.views;
        } catch (error) {
            console.error("取得エラー:", error);
            return null;
        }
    }
};