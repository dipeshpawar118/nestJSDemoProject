import { Test, TestingModule } from '@nestjs/testing';
import { NiteshController } from './nitesh.controller';

describe('NiteshController', () => {
  let controller: NiteshController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiteshController],
    }).compile();

    controller = module.get<NiteshController>(NiteshController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
