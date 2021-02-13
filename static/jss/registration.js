export default class RegistrationPage {
    static render(callback) {
        let location = window.location.href;
        let tmp = location.split('.').reverse()
        if ((tmp[0] === 'html') || location.includes('registration')) {
            document.getElementById('header').style.display = 'none';
            document.getElementById('leftNavigation').style.display = 'none';
        }

        let content = `
        <link rel="stylesheet" href="/static/styles/initialPage.css">
        <div id='signInForm'>
            <div id='cassone'>
                <img id="cassone" src="/static/images/cassone.png">
            </div>
            <div id="greeting">
                <div id="greetingText">Register To Open Your Cassone!</div>
            </div>
            <div id='emailPasswordContainer'>
                <div id='emailBox'>
                    <img id="emailIcon" src="/static/images/envelope.svg">
                    <input type="text" id="emailInputArea" name="email" scroll="none" placeholder="User Name"></input>
                </div>
                <div id='passwordBox'>
                    <img id="passwordIcon" src="/static/images/lock.svg">
                    <input type="password" id="passwordInputArea" name="password" scroll="none" placeholder="Enter Password"></input>
                </div>
                <div id='passwordBox'>
                    <img id="passwordIcon" src="/static/images/lock.svg">
                    <input type="password" id="repeat_password" name="repeat_password" scroll="none" placeholder="Repeat Password"></input>
                </div>
            </div>
            
            <button id="register-btn">Register</button>
            
            <div id="versionText">Version</div>
        </div>
            <div id="error_message" style="color: red"> </div>
        </div>
        `;
        callback(content);
        
        const register = document.getElementById('register-btn');
        register.addEventListener('click', () => this.register());
    }

    static manageValidation(user, pwd, rep_pwd) {
        return (user.length > 0) && (pwd == rep_pwd) && (pwd.length > 0)
    }
    

    static register() {
        var user = document.getElementById('emailInputArea').value;
        var password = document.getElementById('passwordInputArea').value;
        var rep_password = document.getElementById('repeat_password').value;
    
        let userIsValid = this.manageValidation(user, password, rep_password);
    
        if(userIsValid) {
            localStorage.setItem('user', JSON.stringify({userName: user, pwd: password}));
            window.location = '#/login';
        }
    }
}