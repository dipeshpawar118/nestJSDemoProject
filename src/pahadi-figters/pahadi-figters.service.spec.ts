import { Test, TestingModule } from '@nestjs/testing';
import { PahadiFigtersService } from './pahadi-figters.service';

describe('PahadiFigtersService', () => {
  let service: PahadiFigtersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PahadiFigtersService],
    }).compile();

    service = module.get<PahadiFigtersService>(PahadiFigtersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
