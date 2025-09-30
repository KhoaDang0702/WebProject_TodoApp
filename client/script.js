const input = document.querySelector(".input");
const btn = document.getElementById("addBtn");
const show = document.getElementById("show");
const form = document.getElementById("input")


form.addEventListener("submit", (e) => {
  // ngăn chặn hành động reset mặc định của trình duyệt khi người dùng submit nội dụng 
  e.preventDefault();
  addTask();
})


// hàm thêm task vào todo list
function addTask() {
  const text = input.value.trim();
  // !text tương tự text === ""
  if (!text) return;

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
        <span>${text}</span>
        <div>
          <button class="doneBtn">Done</button>
          <button class="delete">X</button>
        </div>
      `;
  show.prepend(task);
  input.value = "";

  task.querySelector(".doneBtn").addEventListener("click", () => {
    task.querySelector("span").classList.toggle("done");
  });

  task.querySelector(".delete").addEventListener("click", () => {
    task.remove();
  });
}


