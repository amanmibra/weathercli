const {expect, test} = require('@oclif/test')

describe('zipcode', () => {
  test
  .stdout()
  .command(['zipcode'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['zipcode', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
