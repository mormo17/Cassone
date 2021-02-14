export default class DemoPage {
    static render(callback) {
        console.log('DemoPage');
        let location = window.location.href;
        if (!location.includes('login') && !location.includes('registration')) {
            document.getElementById('header').style.display = 'block';
            document.getElementById('leftNavigation').style.display = 'block';
        }
        myCallBack = callback
        let tasks = JSON.parse(localStorage.getItem('tasks'))

        let content = `
        <link rel="stylesheet" href="/static/styles/demoPage.css" />
            <div id="demo">
                <h2>Demo Page</h2>
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