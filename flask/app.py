from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Data')
def Data():
    return render_template('Data.html')

@app.route('/jobs')
def jobs():
    return render_template('jobs.html')

@app.route('/Network')
def Network():
    return render_template('Network.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/profile1')
def profile1():
    return render_template('profile1.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/Software')
def Software():
    return render_template('Software.html')

@app.route('/UXIX')
def UXIX():
    return render_template('UXIX.html')

@app.route('/job1')
def job1():
    return render_template('job1.html')

@app.route('/job2')
def job2():
    return render_template('job2.html')

@app.route('/job3')
def job3():
    return render_template('job3.html')

@app.route('/job4')
def job4():
    return render_template('job4.html')

@app.route('/job5')
def job5():
    return render_template('job5.html')

@app.route('/job6')
def job6():
    return render_template('job6.html')

@app.route('/job7')
def job7():
    return render_template('job7.html')

@app.route('/job8')
def job8():
    return render_template('job8.html')

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

@app.route('/script')
def script():
    return render_template('script.js')



if __name__ == '__main__':
    app.run(debug=True)
