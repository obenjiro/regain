import { expect, test } from '@oclif/test'

describe('init', () => {
  test
    .stdout()
    .command(['help'])
    .it('runs hello', (/*ctx*/) => {
      expect(true).equal(true);
    })

  // test
  //   .stdout()
  //   .command(['init', '--name', 'jeff'])
  //   .it('runs hello --name jeff', ctx => {
  //     expect(ctx.stdout).to.contain('hello jeff')
  //   })
})
