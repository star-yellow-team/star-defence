import sqlite3
import sha
import uuid

DB_LINK = 'db.sql'

"""
Verifica daca numele si parola sunt
valide.
@return True daca da
@return False altfel
Ex: ok = sign_in_user('test','test')
"""
def sign_in_user(name, password):
    conn    = None
    cursor  = None
    user    = None
    crypter = sha.sha()

    try:
        conn = sqlite3.connect(DB_LINK)
        cursor = conn.cursor()
    
        crypter.update(password)
        password = crypter.hexdigest()
    
        cursor.execute("SELECT * FROM USERS WHERE name = ? AND PASSWORD = ?", (name, password))
        
        if len(cursor.fetchall()) == 0:
            return False
        else:
             return True 

    except sqlite3.Error as e:
        print e
    finally:
        if conn is not None:
            if cursor is not None:
                cursor.close()
            conn.close()

    return False
        
def sign_up_guest():
    return 'guest' + str(uuid.uuid1())[:20]    

"""
Incearca inregistrarea utilizatorului
in baza de date(numele trebuie sa fie
unic).
@return True daca se reuseste
@return False altfel
Ex: ok = sign_up_user('test', 'test')
"""
def sign_up_user(name, password):
    crypter= sha.sha()
    conn    = None 
    cursor  = None
    user    = None
    ok      = False

    try:
        conn    = sqlite3.connect(DB_LINK)
        cursor  = conn.cursor()
    
        crypter.update(password)
        password = crypter.hexdigest()
        
        cursor.execute("INSERT INTO USERS(NAME, PASSWORD) VALUES(?,?)", (name, password))
        conn.commit()
        ok      = True
    except sqlite3.Error as e:
        print e
        ok = False
        conn.rollback()
    finally:
        if conn is not None:
            if cursor is not None:
                cursor.close()
            conn.close()
        return ok

    return False

"""
Adauga scorul pentru utilizator.
@return True daca s-a reusit
@return False altfel
Ex: ok = new_score('test', 1000)
"""
def new_score(name, score):
    conn    = None
    cursor  = None
    ok      = False 

    try:
        conn    = sqlite3.connect('db.sql')
        cursor  = conn.cursor()
       
        cursor.execute('pragma foreign_keys = ON') 
        cursor.execute('select id from users where name = ?', (name, ))
        u_id = cursor.fetchone()[0]
        cursor.execute('INSERT INTO SCORES(USER_ID, VALUE) VALUES(?,?)', (u_id, score))
        conn.commit()
        ok = True
    except sqlite3.Error as e:
        print e
        conn.rollback()
        ok = False
    finally:
        if conn is not None:
            if cursor is not None:
                cursor.close()
            conn.close()

        return ok

    return False        
