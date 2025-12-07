import _ from 'lodash';

const filepath = '/path/to/index.js';
const parts = filepath.split('/');
const filename = _.last(parts);
const extension = _.last(filename.split('.'));

const info = {
    filename,
    extension,
};

console.log(info);

const lessonsCount = 5;
const course = {
  lessonsCount,
  name: 'Объекты',
};
course.lessonsCount += 1;

console.log(course);

const getDomainInfo = (link) => {
    // let scheme = '';
    // let name = '';
    // if (!link.startsWith('http')) {
    //     link = `http://${link}`;
    // }
    // const split = link.split('://')
    // scheme = split[0];
    // name = _.last(split[1].split('/'));

    // return {scheme, name};
    let name, scheme;
    if (link.startsWith('https')) {
        scheme = 'https';
    }
    else scheme = 'http';

    name = link.replace(`${scheme}://`, '')

    return {scheme, name};
}

console.log(getDomainInfo('www.yandex.ru/valera.html'));



