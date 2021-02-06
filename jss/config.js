let myCallBack = {}
let tasks = [{name: "First Task", date: "2021-03-09"}, 
            {name: "Web Final Project", date: "2021-02-14"},
            {name: "ML Final Project", date: "2021-02-20"}]

let diaryEntries = [{entry:"Today I have Deadline in Web's final project. " +
                            "On 20th February I have another deadline (in Machine Learning). But I have to work all week too! " +
                            "I don't want to pull any more all nighters :'( At the same time I'm afraid I won't make everything done in time. " +
                            "Jesus, I'm so stressed",
                    date: "14/02/2021",
                    noteDescription: "Web's final project"},
                    {entry:"Today I Have Dedline in cryptography. There is three assignements due today and I only have 2/3 of it done!" +
                            "Hope everything will be all right. ",
                    date: "10/02/2021",
                    noteDescription: "Cryptography Assignements"},
                    {entry:"Today I had deadline in IOS final project. I miss Sleep. I feel a little bit dissapointed," +
                            "because I feel like I could have done so much more and so much better.",
                    date: "08/02/2021",
                    noteDescription: "IOS Final project and my feelings :)"}]


let toWatch = [{name: "Interstellar"}]
let entryIndex = 0
let diaryBackgroundColor = 'lightgoldenrodyellow'
        
localStorage.setItem('tasks', JSON.stringify(tasks))