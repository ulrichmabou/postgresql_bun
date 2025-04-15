import { sql } from 'bun'

try {
  const tasks = await sql`
    SELECT
        tasks.*,
        categories.name AS category_name
    FROM
        tasks
    JOIN
        categories ON tasks.category_id = categories.id;
  `

  console.log(tasks)
} catch (error: any) {
  console.log('Error: ' + error.message)
}


// try {
//   const categories = await sql`
//     SELECT * FROM categories;
//   `

//   console.log(categories)
// } catch (error: any) {
//   console.log('Error: ' + error.message)
// }


// try {
//   const categories = await sql`
//     SELECT * FROM categories;
//   `

//   console.log(categories.map((category: any) => category.name))
// } catch (error: any) {
//   console.log('Error: ' + error.message)
// }


// try {
//   const tasks = await sql`
//     SELECT * FROM tasks;
//   `

//   console.log(tasks)
// } catch (error: any) {
//   console.log('Error: ' + error.message)
// }
