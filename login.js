document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                alert("Login successful!");
                localStorage.setItem("user", JSON.stringify(user)); 
                window.location.href = "dashboard.html"; 
            } else {
                alert("Invalid email or password.");
            }
        });
});
