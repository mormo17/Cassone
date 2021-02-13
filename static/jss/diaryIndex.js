export default class DiaryIndex {
    static render(callback) {
        // console.log('Render Diary Index');
        let content = `
        <link rel="stylesheet" href="/static/styles/diaryIndex.css"/>
            <ul>
            <li id="yellow-note" style="cursor: pointer">
                <a>
                    <h2>${diaryEntries[0].date}</h2>
                    <p >${diaryEntries[0].noteDescription}</p>
                </a>
            </li>
            <li id="green-note" style="cursor: pointer">
            <a>
                <h2>${diaryEntries[1].date}</h2>
                <p>${diaryEntries[1].noteDescription}</p>
            </a>
            </li>
            <li id="purple-note" style="cursor:pointer">
                <a>
                    <h2>${diaryEntries[2].date}</h2>
                    <p>${diaryEntries[2].noteDescription}</p>
                </a>
            </li>
        </ul>
        `;
        
        callback(content);
        document.body.style.background = 'gray';
        const yellowNote = document.getElementById('yellow-note');
        yellowNote.addEventListener('click', () => this.loadDiary('lightgoldenrodyellow', '0'));

        const greenNote = document.getElementById('green-note');
        greenNote.addEventListener('click', () => this.loadDiary('#cfc', '1'));

        const purpleNote = document.getElementById('purple-note');
        purpleNote.addEventListener('click', () => this.loadDiary('#ccf', '2'));

        const today = document.getElementById('today');
        today.addEventListener('click', () => this.returnHomePage());
    }

    static loadDiary(color, index){
        console.log(color);
        console.log(index);
        entryIndex = index;
        diaryBackgroundColor = color;
        window.location = "#/diary"
    }

    static returnHomePage(){
        console.log('Should return to HomePage');
        document.body.style.background = 'white';
        window.location = "#/homePage"
    }

}