export default class HomePage {
    static render(callback) {
        let location = window.location.href;
        if (!location.includes('login') && !location.includes('registration')) {
            document.getElementById('header').style.display = 'block';
            document.getElementById('leftNavigation').style.display = 'block';
        }
        myCallBack = callback
        let tasks = JSON.parse(localStorage.getItem('tasks'))

        let content = `
        <link rel="stylesheet" href="/static/styles/homePage.css" />
        <link rel="stylesheet" href="/static/styles/newTaskModal.css" />

        <div id='todoes' class='todoes'>
            <div id='titleBox' class="titleBox">
                <div id="homeTitle" class="homeTitle">Home</div>
                <div id="dueDate" class="dueDate">Due Date</div>
            </div>

            <div class="tasks" id='tasks-container'>

                ${tasks.map((task, index) => 
                `
                    <div class='singleTask'>
                        <div class="checkBoxContainer">
                            <input type="checkbox" id="checkBox" name="checkBox" value="checkBox">
                            <label for="checkBox"> ${task.name} </label>
                        </div>
                    
                        <div class="icons-container">
                            <div class="taskDueDate">${task.date}</div>
                            <div class="editDelete">
                                <div class="tooltip">
                                    <i class="fa fa-flag" aria-hidden="true" id="${index}-show">
                                        <div id="myDropdown" class="dropdown-content">
                                        <a class="dropdown-option" id="${index}-blue">Low</a>
                                        <a class="dropdown-option" id="${index}-orange">Medium</a>
                                        <a class="dropdown-option" id="${index}-red">High</a>
                                        </div>
                                    </i>
                                    <span class="tooltiptext">Change Priority</span>
                                </div>
                                <div class="tooltip" id="${index}-delete">
                                    <i class="fa fa-trash" aria-hidden="true"></i>  
                                    <span class="tooltiptext">Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join(' ')}
            </div>

            <div id="fourthSingleTask" class='singleTask'>
                <div class="checkBoxContainer">
                <i class="fa fa-plus" id="addBtn" aria-hidden="true"></i>
                <label for="taskTitle"> Add Task </label>
                </div>
            </div>

            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span style="cursor: pointer" class="close">&times;</span>
                    <div class="modal-header">
                        <p><b>Add New Task</b></p>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-left-column">
                        <p>Task Name</p>
                        <input type="text" class="task-name modal-item" 
                                id="taskTitle" maxlength="30"
                                placeholder="Enter Task Name"
                                required>
                        <p>Priority</p>
                        
                        <select class="custom-select modal-item" id="taskPriority" required>
                            <option value="low" selected="">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <p>Due Date</p>
                        <input type="date" id="datePicker"class="modal-item" id="start" name="trip-start"
                        value="2020--22"
                        min="2020-01-01" max="2022-01-01" required>
                        </div>
                        <div class="modal-body-right-column modal-item">
                        <p>Description</p>
                        <textarea class="task-description-textarea modal-item" placeholder="Enter Task Description"></textarea>
                        <!-- <div>Task Description is required</div> -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="addTask" type="submit" class="add-task-btn"> Add Task </button>
                    </div>
                </div>
            </div>

        </div>
        `;
        callback(content);
    
        for (let i = 0; i < tasks.length; i++) {
            let id = i + '-show'
            document.getElementById(id).addEventListener('click', () => {
                this.showPriorities(id);
            });
        }
        for (let i = 0; i < tasks.length; i++) {
            let id = i + '-blue'
            document.getElementById(id).addEventListener('click', () => {
                this.blue(id);
            });
        }
        for (let i = 0; i < tasks.length; i++) {
            let id = i + '-orange'
            document.getElementById(id).addEventListener('click', () => {
                this.orange(id);
            });
        }
        for (let i = 0; i < tasks.length; i++) {
            let id = i + '-red'
            document.getElementById(id).addEventListener('click', () => {
                this.red(id);
            });
        }
        for (let i = 0; i < tasks.length; i++) {
            let id = i + '-delete'
            document.getElementById(id).addEventListener('click', () => {
                this.delete(id);
                tasks.splice(i, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks))
            });
        }

        const addBtn = document.getElementById('addBtn');
        addBtn.addEventListener('click', () => this.openModal());

        const addTask = document.getElementById('addTask');
        addTask.addEventListener('click', () => this.addTask());

        const diary = document.getElementById('diary');
        diary.addEventListener('click', () => this.loadDiary());
    }

    static showPriorities(x) {
        document.getElementById(x).firstElementChild.classList.toggle("show");
    }
    static blue(x){
        document.getElementById(x).parentElement.parentElement.style.color = 'blue'
    }
    static orange(x){
        document.getElementById(x).parentElement.parentElement.style.color = 'orange'
    }
    static red(x){
        document.getElementById(x).parentElement.parentElement.style.color = 'red'
    }
    static delete(x){
        document.getElementById(x).parentElement.parentElement.parentElement.style.display = 'none'
    }
    static delete(x){
        document.getElementById(x).parentElement.parentElement.parentElement.style.display = 'none'
    }

    static openModal() {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";
        
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    static addTask() {
        let title = document.getElementById("taskTitle").value;
        let date = document.getElementById('datePicker').value;

        if (title && date) {
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            tasks[tasks.length] = {name: title, date: date}
            localStorage.setItem('tasks', JSON.stringify(tasks))

            var modal = document.getElementById("myModal");
            modal.style.display = "none";

            document.getElementById("taskTitle").value = '';
            document.getElementById('datePicker').value = '';
            this.render(myCallBack)
        }
    }

    static loadDiary(){
        console.log("Diary");
        window.location = "#/diaryIndex"
    }
}