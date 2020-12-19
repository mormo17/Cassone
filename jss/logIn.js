export default class LogInPage {
    static render(callback) {
        let location = window.location.href;
        let tmp = location.split('.').reverse()
        if ((tmp[0] === 'html') || location.includes('login')) {
            document.getElementById('header').style.display = 'none';
            document.getElementById('leftNavigation').style.display = 'none';
        }
        let content = `
        <link rel="stylesheet" href="../styles/initialPage.css">
        <div id='signInForm'>
            <div id='cassone'>
                <img id="cassone" src="../images/cassone.png">
            </div>
            <div id="greeting">
                <div id="greetingText">Open Your Cassone!</div>
            </div>
            <div id='emailPasswordContainer'>
                <div id='emailBox'>
                    <img id="emailIcon" src="../images/envelope.svg">
                    <input type="text" id="emailInputArea" name="email" scroll="none" placeholder="User Name"></input>
                </div>
                <div id='passwordBox'>
                    <img id="passwordIcon" src="../images/lock.svg">
                    <input type="password" id="passwordInputArea" name="password" scroll="none" placeholder="Password"></input>
                </div>
            </div>
            <div id="signUpBox" class="button">
                <div id="signUpButtonText">Sign Up</div>
            </div>
            
            <div id="signInBox" class="button">
                <div id="signInButtonText">Sign In</div>
            </div>
            <div id="divisor">- OR -</div>
            <div id="demoBox" class="button" onclick="loadDemo()">
            <div id="demoText">Demo</div>
            <div id="versionText">Version</div>
        </div>
            <div id="error_message" style="color: red"> </div>


            <div id="signInWithGoogleBox" class="button" style="cursor: pointer">
                <img id="googleIcon" src="../images/googleIcon.svg">
                <div id="signInWithGoogleButtonText">Sign in with Google</div>
            </div>
        </div>
        `;
        callback(content);
        
        const login = document.getElementById('signInBox');
        login.addEventListener('click', () => this.login());

        const register = document.getElementById('signUpBox');
        register.addEventListener('click', () => this.register());
    }

    static getValue(query) {
        return document.querySelector(query).value
    }
    
    static getUser() {
        return document.getElementById("emailInputArea").value
    }

    static getPwd() {
        return document.getElementById("passwordInputArea").value
    }
    
    static getErrorElem() {
        return document.getElementById("error_message")
    }
    
    static manageErrorMessage(user, dbUser, pwd, dbPwd, errorElem) {
        if (user !== dbUser) {
            errorElem.innerText= " User with this username does not exist"
            return;
        }
        if (dbPwd === pwd) {
            localStorage.setItem('status', 'loggedin')
            window.location = "#/homePage"		
            return;	
        } else {
            errorElem.innerText= "Incorrect Password"
            return;
        }
    }
    
    static login() {
        var user = this.getUser();
        var pwd = this.getPwd();

        let item = JSON.parse(localStorage.getItem('user'))

        let dbUser = '';
        let dbPwd = '';
        if (item) {
            dbUser = item.userName
            dbPwd = item.pwd
        }
        var errorElem = this.getErrorElem();
        this.manageErrorMessage(user, dbUser, pwd, dbPwd, errorElem);
    }

    static register() {
        window.location = "#/registration"		
    }
}