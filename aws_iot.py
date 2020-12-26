from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
import os

class aws_iot():
    def __init__(self):
        self.client = AWSIoTMQTTClient("myClientID", useWebsocket=True)

    def aws_connect(self):
        self.client.configureEndpoint("a247jnsfrl6hqw-ats.iot.ap-south-1.amazonaws.com", 443)
        # AWS IoT MQTT Client
        self.client.configureIAMCredentials('AKIAW4YHSL77QXB37PUS', 'jCCtCV6PLsZB8d9eU3SzQ4PVakVxc5+WUoRskJ4q')
        cwd = os.getcwd()
        crt_path = os.path.join(cwd,"root_ca.crt")
        print(crt_path)
        self.client.configureCredentials(crt_path)
        self.client.configureOfflinePublishQueueing(-1)  # Infinite offline Publish queueing
        self.client.configureDrainingFrequency(2)  # Draining: 2 Hz
        self.client.configureConnectDisconnectTimeout(10)  # 10 sec
        self.client.configureMQTTOperationTimeout(5)  # 5 sec
        return self.client.connect()

    def aws_publish(self, data):
        return self.client.publish("skc", data, 1)