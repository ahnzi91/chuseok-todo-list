// 1. 유저가 값을 입력한다.
// 2. "+" 버튼을 클릭하면 할 일이 추가된다.
// 3. 유저가 삭제 버튼을 누르면 할 일이 삭제된다.
// 4. 유저가 체크 버튼을 누르면 할 일이 끝나면서 밑줄이 간다.
// 5. 진행 중, 완료 탭을 누르면 탭의 "under-line"이 이동한다.
// 6. 완료 탭에는 완료된 할 일만, 진행중 탭에는 진행중인 할 일만 노출된다.
// 7. 전체 탭을 누르면 전체 할 일이 노출된다.

let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");

let taskList = [];

addBtn.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `
      <div class="task">
        <div>${taskList[i]}</div>
        <div>
          <button>Check</button>
          <button>Delete</button>
        </div>
      </div>
    `;
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}
