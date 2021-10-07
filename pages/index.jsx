import { userService } from 'services';
export default Home;

function Home() {

    function logout() {
        userService.logout(userService.userValue?.id);
    }

    const currentLoginDate = new Date(userService.userValue?.currentLogin);
    const LastLoginDate = new Date(userService.userValue?.lastLogin);

    const lastLoginDiff = userService.dateDiff(LastLoginDate, currentLoginDate);

    return (
        <div className="content-light">
            <div className="p-4">
                <div className="container">
                    <div className="flex-wrap d-flex justify-content-center mt-5">
                        <h1 className="">Wellcome!</h1>
                    </div>
                    <div className="flex-wrap d-flex justify-content-center">
                        <p className="">The last time was you accessed was!</p>
                    </div>
                    <div id="timer" className="flex-wrap d-flex justify-content-center">
                        <div id="days" className="align-items-center flex-column d-flex justify-content-center">{ isNaN(lastLoginDiff.Days)  ? '0' : lastLoginDiff.Days } <span>Days</span></div>
                        <div id="hours" className="align-items-center flex-column d-flex justify-content-center">{ isNaN(lastLoginDiff.Hours)  ? '0' : lastLoginDiff.Hours } <span>Hours</span></div>
                        <div id="minutes" className="align-items-center flex-column d-flex justify-content-center">{ isNaN(lastLoginDiff.Minutes)  ? '0' : lastLoginDiff.Minutes } <span>Minutes</span></div>
                        <div id="seconds" className="align-items-center flex-column d-flex justify-content-center">{ isNaN(lastLoginDiff.Seconds)  ? '0' : lastLoginDiff.Seconds } <span>Seconds</span></div>
                    </div>
                    <div className="flex-wrap d-flex justify-content-center mt-5">
                        <button onClick={logout} className="btn btn-primary">Logout</button>
                    </div>                    
                </div>
            </div>
        </div>        
    );
}
