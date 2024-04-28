from flask import Flask, request, jsonify, abort
import json

app = Flask(__name__)

try:
    with open("../data.json", "r") as f:
        tasks = json.load(f)
except FileNotFoundError:
    print("FileNotFound!")
except Exception as e:
    print(f"Some error {e} happened!")

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({
        'tasks': tasks
    })

@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        abort(404)
    return jsonify(task)



if __name__ == "__main__":
    app.run(debug=True)