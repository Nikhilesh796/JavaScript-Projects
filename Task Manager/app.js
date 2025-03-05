        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;
            
            let li = document.createElement("li");
            li.className = "flex justify-between items-center bg-gray-200 p-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105";
            li.innerHTML = `
                <span class="task-text">${taskText}</span>
                <div>
                    <button onclick="completeTask(this)" class="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">✔</button>
                    <button onclick="deleteTask(this)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">✖</button>
                </div>
            `;
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }

        function completeTask(button) {
            let taskItem = button.parentElement.parentElement;
            taskItem.querySelector(".task-text").classList.add("strike-through");
            setTimeout(() => {
                taskItem.classList.add("fade-out");
                setTimeout(() => taskItem.remove(), 1000);
            }, 2000);
        }

        function deleteTask(button) {
            let taskItem = button.parentElement.parentElement;
            taskItem.classList.add("fade-out");
            setTimeout(() => taskItem.remove(), 1000);
        }