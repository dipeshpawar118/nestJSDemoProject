import { Test, TestingModule } from '@nestjs/testing';
import { PahadiFigtersController } from './pahadi-figters.controller';

describe('PahadiFigtersController', () => {
  let controller: PahadiFigtersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PahadiFigtersController],
    }).compile();

    controller = module.get<PahadiFigtersController>(PahadiFigtersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
