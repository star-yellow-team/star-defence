import sqlite3


# TODO --> implementeaza facilitate
# de logare
def sign_in_user(name, password):
    conn    = sqlite3.connect('db.sql')
    cursor  = None
    user    = None

    try:
        cursor  = conn.execute("SELECT * FROM USERS WHERE name = ? AND PASSWORD = ?", (name, password))
        user    = cursor.fetchone()
    except sqlite3.Error as e:
        print e
    finally:
        if conn is not None:
            if cursor is not None:
                cursor.close()
            conn.close()

        return user
        


    # pass

# TODO --> implementeaza facitilitate
# de signup
def sign_up_user(name, password):
    pass

# TODO --> impelemteaza facilitate
# de a pune un scor nou
def new_score(name, score):
    pass





