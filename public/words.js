function getCategories() {
    fetch('/words.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .catch(function () {
            this.dataError = true;
        });
}
