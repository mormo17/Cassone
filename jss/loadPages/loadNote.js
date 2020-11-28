function loadNote(color){
    // console.log('ragaca');
    // console.log(color);
    if(color[0]=='#'){
        color=color.replace('#', '')
        location.href = `../../htmls/diary.html?backgroundColor=${color},isSpecialColor=true`;
    }else{
        location.href = `../../htmls/diary.html?backgroundColor=${color}`;
    }
    // console.log(location.href)
}
