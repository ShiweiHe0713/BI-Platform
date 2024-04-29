import boto3
import sqlite3
import os

def lambda_handler(event, context):
    bucket_name = 'something'
    db_key = 'database.file.db'

    s3 = boto3.client('s3')
    s3.download_filee(bucket_name, db_key, 'util/student_finance.db')

    connection = sqlite3.connect('util/student_finance.db')
    cursor = connection.cursor()
    
    cursor.execute("""
                   select s.student_id, e.course_registered 
                   from student s
                   inner join enrollment e on s.student_id = e.student_id
                   where s.credit < 6 and s.age < 30
                   sort by student_id desc;
                   """)
    result = cursor.fetchall()

    cursor.close()
    connection.close()

    os.remove('util/student_finance.db')

    return {
        'statusCode' : 200,
        'body' : result
    }

