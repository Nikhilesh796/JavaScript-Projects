import { db, tasksCollection } from "./firebase-config.js";
import { addDoc, getDocs, deleteDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a task to Firestore
addTaskBtn.addEventListener("click", async () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    try {
        await addDoc(tasksCollection, { title: taskText, completed: false });
        taskInput.value = "";
        loadTasks();
    } catch (error) {
        console.error("Error adding task:", error);
    }
});

// Function to load tasks from Firestore
async function loadTasks() {
    taskList.innerHTML = ""; // Clear list before loading
    const querySnapshot = await getDocs(tasksCollection);

    querySnapshot.forEach((doc) => {
        const taskData = doc.data();
        const taskItem = document.createElement("li");
        taskItem.className = "flex justify-between bg-gray-200 p-2 rounded";

        taskItem.innerHTML = `
            <span class="${taskData.completed ? 'line-through text-gray-500' : ''}">${taskData.title}</span>
            <div>
                <button class="complete-btn bg-green-500 text-white px-2 py-1 rounded" data-id="${doc.id}">✔</button>
                <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded" data-id="${doc.id}">✖</button>
            </div>
        `;

        taskList.appendChild(taskItem);
    });

    attachEventListeners();
}

// Attach event listeners for complete and delete
function attachEventListeners() {
    document.querySelectorAll(".complete-btn").forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const taskId = e.target.dataset.id;
            const taskRef = doc(db, "tasks", taskId);
            await updateDoc(taskRef, { completed: true });
            loadTasks();
        });
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const taskId = e.target.dataset.id;
            const taskRef = doc(db, "tasks", taskId);
            await deleteDoc(taskRef);
            loadTasks();
        });
    });
}

// Load tasks on page load
loadTasks();
