export default class diary{
    static render(callback) {
        console.log('Render Diary Index');
        let content = `
        <link rel="stylesheet" href="../styles/diary.css" />
            <div class="paper">
            <div class="lines">
                <div class="text" contenteditable spellcheck="false">
                Dear, Diary <br/><br/>
                Help.
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
        document.getElementsByClassName('holes')[1].style.background = diaryBackgroundColor;;
        document.getElementsByClassName('holes')[2].style.background = diaryBackgroundColor;;
    }
}