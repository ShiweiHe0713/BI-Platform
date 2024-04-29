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
    next_task = next((task for task in tasks if task['id'] == task_id), None)
    if next_task is None:
        abort(404)
    return jsonify(next_task)

@app.route('/tasks', methods=['POST'])
def create_task():
    # Check if the request is whether valid
    if not request.json or not request.json['title']:
        abort(404)
    # Start traversing the tasks list and append the new one
    title = request.json['title']
    completedness = request.json.get('completed', False)
    task_id = tasks[-1]['id'] + 1 if tasks else 1
    task = {
        "id" : task_id,
        "title": title,
        "completed" : completedness
    }
    tasks.append(task)
    return jsonify(task), 201

if __name__ == "__main__":
    app.run(debug=True)