// 1. 유저가 값을 입력한다.
// 2. "+" 버튼을 클릭하면 할 일이 추가된다.
// 3. 유저가 삭제 버튼을 누르면 할 일이 삭제된다.
// 4. 유저가 체크 버튼을 누르면 할 일이 끝나면서 밑줄이 간다.
//   4.1 isChecked가 false에서 true로 바뀌어야 한다.
//   4.2 isChecked: true -> 할 일이 끝난 것으로 간주하고 밑줄을 보여준다.
//   4.3 isChecked: false -> 할 일이 안끝난 것으로 간주하고 밑줄 사라진다.
// 5. 진행 중, 완료 탭을 누르면 탭의 "under-line"이 이동한다.
// 6. 완료 탭에는 완료된 할 일만, 진행중 탭에는 진행중인 할 일만 노출된다.
// 7. 전체 탭을 누르면 전체 할 일이 노출된다.

let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");

let taskList = [];

addBtn.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete === true) {
      resultHTML += `
        <div class="task">
          <div class="task-done">${taskList[i].taskContent}</div>
          <div>
            <button type="button" onclick="toggleComplete('${taskList[i].id}')"><i class="fas fa-redo"></i></button>
            <button type="button" onclick="deleteTask('${taskList[i].id}')"><i class="fas fa-trash-alt text-danger"></i></button>
          </div>
        </div>
      `;
    } else {
      resultHTML += `
        <div class="task">
          <div>${taskList[i].taskContent}</div>
          <div>
            <button type="button" onclick="toggleComplete('${taskList[i].id}')"><i class="fas fa-check text-success"></i></button>
            <button type="button" onclick="deleteTask('${taskList[i].id}')"><i class="fas fa-trash-alt text-danger"></i></button>
          </div>
        </div>
      `;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

// 내가 체크한 taskList의 id와 실제로 taskList 배열에 있는 id 비교하는 함수
function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i, 1);
      break;
    }
  }
  // taskList.forEach((item, index) => {
  //   if (item.id === id) {
  //     taskList.splice(index, 1);
  //     return;
  //   }
  // });
  render();
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
