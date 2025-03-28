document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert("Email already registered. Please log in.");
            } else {
                
                const newUser = { name, email, password };

                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newUser)
                })
                    .then(response => response.json())
                    .then(() => {
                        alert("Registration successful! You can now log in.");
                        window.location.href = "login.html"; // Redirect to login page
                    });
            }
        });
});
