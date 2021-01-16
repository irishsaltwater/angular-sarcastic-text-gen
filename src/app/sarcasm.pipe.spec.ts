import { SarcasmPipe } from './sarcasm.pipe';

describe('SarcasmPipe', () => {
  it('create an instance', () => {
    const pipe = new SarcasmPipe();
    expect(pipe).toBeTruthy();
  });
});
