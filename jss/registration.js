export default class RegistrationPage {
    static render(callback) {
        let location = window.location.href;
        let tmp = location.split('.').reverse()
        if ((tmp[0] === 'html') || location.includes('registration')) {
            document.getElementById('header').style.display = 'none';
            document.getElementById('leftNavigation').style.display = 'none';
        }

        let content = `
        <style type="text/css">
            div {
                padding: 15px;
            }

            body {
                width: 60%;
                margin: auto;
            }

            #testconfig {
                width: 50%;
                height: 300px;
                position: absolute;
                background: white;
                z-index: 9;
            }

            input {
                padding: 10px;
            }
            
            p {
                margin: 10px 0 10px 0;
            }

            .input-container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-left: 60px;
                border: 2px solid #4CAF50;
                background: white;
            }

            .pwd-container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
            }

            #register {
                padding: 15px 32px;
                border: none;
                cursor: pointer;
                border-radius: 4px;
                color: white;
                background-color: #4CAF50;
            }

            #register:hover {
                background-color: #555555;
            } 
            .upload-image {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .load {
                width: 50%;
            }
            .button {
                border: none;
                padding: 10px 15px;
                cursor: pointer;
                border-radius: 4px;
                color: white;
                background-color: #4CAF50;
            }
            .button:hover {
                background-color: #555555;
            }
            .img-container {
                padding: 0;
                margin-top: 12px;
                width: 200px;
                height: 200px;
                border: 2px solid black;
                border-radius: 50%;
            }
            #output {
                border-radius: 50%;
            }
        </style>

        <div id="app">
            <div class="input-container">
                <h2> Registration </h2>

                <div>
                    <p> Username </p>
                    <input type="text" 
                        id="username" 
                        placeholder="username">
                    </input>
                </div>
                
                <div>
                    <p> Password </p>
                    <input type="password" 
                        id="password" 
                        placeholder="password">
                    </input>
                </div>
                
                <div>
                    <p> Repeat Password </p>
                    <input type="password" 
                        id="repeat_password" 
                        placeholder="repeat password">
                    </input>
                </div>
                
                <button id="register">Register</button>
            </div>
        </div>
        `;
        callback(content);

        const register = document.getElementById('register');
        register.addEventListener('click', () => this.register());
    }
    
    static manageValidation(user, pwd, rep_pwd) {
        return (user.length > 0) && (pwd == rep_pwd) && (pwd.length > 0)
    }
    
    static register() {
        var user = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var rep_password = document.getElementById('repeat_password').value;
    
        let userIsValid = this.manageValidation(user, password, rep_password);
    
    
        if(userIsValid) {
            localStorage.setItem('user', JSON.stringify({userName: user, pwd: password}));
            window.location = '#/login';
        }
    }
}