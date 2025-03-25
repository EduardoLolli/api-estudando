class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registerList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registerList);
    }
    catch (err) {
      //
    }
  }


  async setNew(req, res) { }

  async updateValue(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const isUpdated = await this.serviceEntity.updateRegister(updatedData, Number(id));

      if (!isUpdated) {
        return res.status(400).json({ message: 'Não foi possivel atualizar o registro' });
      }
      return res.status(200).json({ mensagem: 'Registro alterado com sucesso' });
    } catch (err) {
      //
    }

  }


  async deleteByID(req, res) { }




}

module.exports = Controller;