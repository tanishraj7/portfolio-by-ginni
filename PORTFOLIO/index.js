function clickhandler(){
    alert("thank you for filling the form")

}

function btnhandler(){
    alert("this project is made by me as you can see my pfp below and GINNI is my petname hehe <3")
}

function myfunc(event){
    event.preventDefault();

    var full_name = document.getElementById("name").value;
    var whats_app = document.getElementById("wa").value;
    var job_role = document.getElementById("occupation").value;
    var feed_back = document.getElementById("feedback").value;

    localStorage.setItem("ls_full_name", full_name);
    localStorage.setItem("ls_whats_app", whats_app);
    localStorage.setItem("ls_job_role", job_role);
    localStorage.setItem("ls_feed_back", feed_back);


}