export default class diary{
    static render(callback) {
        let content = `
        <link rel="stylesheet" href="/static/styles/diary.css" />
            <div class="paper">
            <div class="lines">
                <div class="text" contenteditable spellcheck="false">
                Dear, Diary
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ${diaryEntries[entryIndex].date}<br/><br/>
                ${diaryEntries[entryIndex].entry}
            </div>
            </div>
            <div class="holes hole-top"></div>
            <div class="holes hole-middle"></div>
            <div class="holes hole-bottom"></div>
        </div>
        `;
        callback(content);
        document.body.style.background =  diaryBackgroundColor;
        document.getElementsByClassName('holes')[0].style.background = diaryBackgroundColor;
        document.getElementsByClassName('holes')[1].style.background = diaryBackgroundColor;
        document.getElementsByClassName('holes')[2].style.background = diaryBackgroundColor;

        const today = document.getElementById('today');
        today.addEventListener('click', () => this.returnHomePage());
        
        const musicPage = document.getElementById('music');
        musicPage.addEventListener('click', () => this.demoPage());

        const booksPage = document.getElementById('books');
        booksPage.addEventListener('click', () => this.demoPage());

        const moviesPage = document.getElementById('movies');
        moviesPage.addEventListener('click', () => this.demoPage());
    }

    static returnHomePage(){
        console.log('Should return to HomePage');
        window.location = "#/homePage"
    }

    // static demoPage(){
    //     window.location = "#/demoPage"
    // }
}