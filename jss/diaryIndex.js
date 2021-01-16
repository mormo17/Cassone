export default class DiaryIndex {
    static render(callback) {
        console.log('Render Diary Index');
        let content = `
        <link rel="stylesheet" href="../styles/diaryIndex.css"/>
            <ul>
            <li id="yellow-note" style="cursor: pointer">
                <a>
                    <h2>12/05/2019</h2>
                    <p>Text Content #1</p>
                </a>
            </li>
            <li id="green-note" style="cursor: pointer">
            <a>
                <h2>18/07/2019</h2>
                <p>Text Content #2</p>
            </a>
            </li>
            <li id="purple-note" style="cursor:pointer">
                <a>
                    <h2>01/08/2019</h2>
                    <p>Text Content #3</p>
                </a>
            </li>
        </ul>
        `;
        callback(content);
        document.body.style.background =  'gray';
        const yellowNote = document.getElementById('yellow-note');
        yellowNote.addEventListener('click', () => this.loadDiary('lightgoldenrodyellow'));

        const greenNote = document.getElementById('green-note');
        greenNote.addEventListener('click', () => this.loadDiary('#cfc'));

        const purpleNote = document.getElementById('purple-note');
        purpleNote.addEventListener('click', () => this.loadDiary('#ccf'));
    }

    static loadDiary(color){
        console.log(color);
        diaryBackgroundColor = color;
        window.location = "#/diary"
    }
}