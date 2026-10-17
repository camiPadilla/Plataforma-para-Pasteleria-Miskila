import { Test, TestingModule } from '@nestjs/testing';
import { DetallePedidoController } from './detalle-pedido.controller.js';
import { DetallePedidoService } from './detalle-pedido.service.js';

describe('DetallePedidoController', () => {
  let controller: DetallePedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallePedidoController],
      providers: [DetallePedidoService],
    }).compile();

    controller = module.get<DetallePedidoController>(DetallePedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
