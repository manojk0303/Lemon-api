const LemnAPI = require('./index');

(async () => {
  const client = new LemnAPI('MHbbEW9LrqtDFvQWohYM5U');
  try {
      const sup = await client.supplists.create('My List-test');
      console.log('List created:', sup);
      // console.log(await client.supplists.getAll());
      console.log(await client.supplists.update(sup.id,'My List-test ipdate -yesy' ));
      console.log(await client.supplists.get(sup.id));
      console.log(await client.supplists.delete(sup.id));
  } catch (error) {
      console.error('Error creating list:', error);
  }
})();
