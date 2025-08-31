from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/generate', methods=['POST'])
def generate_blog_post():
    data = request.json
    title = data.get('title')
    content = data.get('content')

    # Here you would implement the logic to generate a blog post
    # For now, we will return a mock response
    response = {
        'title': title,
        'content': f'This is a generated blog post based on the title: {title}.',
        'status': 'success'
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)