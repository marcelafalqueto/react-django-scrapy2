from django.db import models
from localflavor.br.models import BRCPFField, BRPostalCodeField
# from localflavor.br.forms import BRCPFField, BRPostalCodeField
from django.core.validators import RegexValidator
from django.contrib.auth.hashers import make_password


cellphone_validator = RegexValidator(
    regex=r'^\+?1?\d{9,15}$',
    message="O número de celular deve ser inserido no formato: '+999999999'. Até 15 dígitos permitidos."
)

# Create your models here.
class UserRegistration(models.Model):
    name = models.CharField(max_length=500, null=True)
    cpf = BRCPFField('CPF', unique=True)
    cep = BRPostalCodeField('CEP', unique=True)
    cellphone = models.CharField(validators=[cellphone_validator], max_length=17, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def save(self, *args, **kwargs):
        self.password = make_password(self.senha)
        super(UserRegistration, self).save(*args, **kwargs)