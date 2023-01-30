## SQL 基本操作指令

### 插入数据 `insert` 语法

```js
insert into table (field1，field 2，…) values(value1，value2，…)
```

例如： 表的名称为 `Student`, 字段内容为 `age`, `name`, `gender` , 插入数据指令

```js
insert into Student(age, name, gender) values(18, '张三', '男')
```

### 删除某条数据 `delete` 语法

```js
delete from table where condition  // table-表的名称  condition-条件
```

> `where` 能对表进行筛选

`delete` 语法能够根据条件删除表中的某一条数据， 例如： 删除表中名字是张三的那条数据

```js
delete from Student where name="张三"
```

### 更新数据 `update` 语法

`update`语句能够对表中某一行或者多行的的某一列或者多列信息进行修改

```js
update table set field2=value2 where  field2=value2  // field-字段 value-值  set-将要修改成的字段和值
```

例如，我们要修改学生表`Student`中学生张三的姓名为李四，我们先通过`where`找到姓名为张三的学生信息，让后用`update`语句进行修改

```js
update Student set name="李四" where name="张三"
```

### 查询表中数据 `select` 语法

`select` 语句能够对表中的信息进行查询

```js
select field 1，field 2，…from table (where condition)  // select-要查询的字段
```

例如，我们要查询 Student 表中所有性别为男学生的姓名

```js
select name from Student where gender='男'
```

查询表中所有信息

```js
select * from Student
```
