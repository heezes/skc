from flask import Flask, render_template, request,jsonify
import json
import aws_iot
import time
iot = aws_iot.aws_iot()
application = Flask(__name__)


@application.route('/')
def hello():
    return render_template('kiosk.html')

@application.route('/dispense', methods=['GET', 'POST'])
def dispense():
    # POST request
    if request.method == 'POST':
        print('Incoming..')
        json_data = json.loads(request.data)
        print(json_data)  # parse as JSON
        print("Publish: "+str(iot.aws_publish(json.dumps(json_data))))
        return 'OK', 200
    # GET request
    else:
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)  # serialize and use JSON headers

print("IoT Connected: "+str(iot.aws_connect()))
if __name__ == '__main__':
    application.run()