const userTable = `CREATE TABLE IF NOT EXISTS
      users(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(256) NOT NULL,
        last_name VARCHAR(256) NOT NULL,
        username VARCHAR(256) NOT NULL,
        password VARCHAR(256) NOT NULL,
        profilePicture VARCHAR(256) DEFAULT 'profilePictures/1.jpg' NOT NULL,
        CONSTRAINT user_unique UNIQUE (username)
      )`;
const languageTable = `CREATE TABLE IF NOT EXISTS
      languages(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        code VARCHAR(125) NOT NULL,
        CONSTRAINT language_unique UNIQUE (name)
      )`;
const lessonTable = `CREATE TABLE IF NOT EXISTS
      lessons(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        language VARCHAR(256) NOT NULL,
        text VARCHAR(256) NOT NULL,

        CONSTRAINT fk_lesson_languages FOREIGN KEY(language)
        REFERENCES languages(name)
        ON DELETE CASCADE
      )`;
const courseTable = `CREATE TABLE IF NOT EXISTS
      courses(
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        lessons_list int[],
        active_lesson Int,
        owner Int NOT NULL,

        CONSTRAINT fk_course_lesson FOREIGN KEY(active_lesson)
        REFERENCES lessons(id)
        ON DELETE SET NULL,
        
        CONSTRAINT fk_course_owner FOREIGN KEY(owner)
        REFERENCES users(id)
        ON DELETE CASCADE
      )`;

module.exports = { userTable, languageTable, lessonTable, courseTable }