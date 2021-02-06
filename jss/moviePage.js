export default class MoviePage {
    static render(callback) {
        let location = window.location.href;
        if (!location.includes('login') && !location.includes('registration')) {
            document.getElementById('header').style.display = 'block';
            document.getElementById('leftNavigation').style.display = 'block';
        }
        myCallBack = callback
        let tasks = JSON.parse(localStorage.getItem('tasks'))

        let content = `
        <link rel="stylesheet" href="../styles/moviePage.css" />
            <div class="row">
                <div class="column" style="background-color:#8FBC8F;">
                    <h2>Watch List</h2>
                    <p>${toWatch[0].name}Some text..</p>
                </div>
                <div class="column" style="background-color:#008080;">
                    <h2>Watched</h2>
                    <p>Some text..</p>
                </div>
            </div>
        `;
        callback(content);
    
        const diary = document.getElementById('diary');
        diary.addEventListener('click', () => this.loadDiary());

        const today = document.getElementById('today');
        today.addEventListener('click', () => this.returnHomePage());
    }

    static loadDiary(){
        console.log("Diary");
        window.location = "#/diaryIndex"
    }

    static returnHomePage(){
        console.log('Should return to HomePage');
        window.location = "#/homePage"
    }
}